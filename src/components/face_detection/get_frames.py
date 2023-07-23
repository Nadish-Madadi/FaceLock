import cv2

class Camera():
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __delete__(self):
        self.video.release()
    
    def frame_capture(self):
        ret, frame = self.video.read()

        # Check if the frame was read successfully
        if not ret:
            print("Error: Unable to read frame from the camera.")
            return None

        ret, jpeg = cv2.imencode(".jpg", frame)

        # Check if the frame was successfully encoded
        if not ret:
            print("Error: Unable to encode frame to JPEG.")
            return None

        return jpeg.tobytes()