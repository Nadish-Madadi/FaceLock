from flask import Flask, render_template, Response
from get_frames import Camera

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.js')

def generate(camera):
    while True:
        frame = camera.frame_capture()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
      
@app.route('/video_feed')
def video_feed():
    return Response(generate(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == 'main':
    app.run(host='0.0.0.0', port = 5000, threaded = True, use_reloader = False)