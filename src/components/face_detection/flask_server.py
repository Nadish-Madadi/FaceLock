from flask import Flask, render_template, Response
from get_frames import Camera
import numpy as np
import cv2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.js')

def generate(camera):
    desired_width = 640 
    desired_height = 640 

    binary_array = []

    while True:
        frame = camera.frame_capture()

        if frame is None:
            continue

        np_frame = np.frombuffer(frame, dtype=np.uint8)
        decoded_frame = cv2.imdecode(np_frame, cv2.IMREAD_COLOR)

        center_x = decoded_frame.shape[1] // 2
        center_y = decoded_frame.shape[0] // 2
        crop_x1 = center_x - desired_width // 2
        crop_x2 = crop_x1 + desired_width
        crop_y1 = center_y - desired_height // 2
        crop_y2 = crop_y1 + desired_height
        cropped_frame = decoded_frame[crop_y1:crop_y2, crop_x1:crop_x2]

        scaled_frame = cv2.resize(cropped_frame, (desired_width, desired_height))

        ret, jpeg = cv2.imencode('.jpg', scaled_frame)

        if not ret:
            continue

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n\r\n')

      
@app.route('/video_feed')
def video_feed():
    return Response(generate(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5000, threaded = True, use_reloader = False)