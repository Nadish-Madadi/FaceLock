import cv2

class Camera():
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __delete__(self):
        self.video.release()
    
    def frame_capture(self):
        ret, frame = self.video.read()

        ret, jpeg = cv2.imencode(".jpg", frame)

        return jpeg.tobytes()