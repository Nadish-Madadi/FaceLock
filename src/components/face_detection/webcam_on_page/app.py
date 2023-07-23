from flask import Flask, render_template, Response
import cv2
from numpy import asarray
import time, os


app = Flask(__name__)

  # use 0 for web camera
#  for cctv camera use rtsp://username:password@ip_address:554/user=username_password='password'_channel=channel_number_stream=0.sdp' instead of camera
# for local webcam use cv2.VideoCapture(0)

def gen_frames():  # generate frame by frame from camera
    camera = cv2.VideoCapture(0)

    frame_to_array = []
    start = time.time()
    end = start
    while True:
        # Capture frame-by-frame
        success, frame = camera.read()  # read the camera frame
        
        if end-start > 5:
            cv2.imwrite(os.path.join(app.root_path, 'templates', 'testing_frame_save.jpg'), frame)
            camera.release()
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result

        end = time.time()

        
        


@app.route('/video_feed')
def video_feed():
    #Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)