import React, { useState, FormEvent, useEffect } from "react";
import Button from "../UI/Button";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { CreatePost } from "../../store/Post/PostSlice";
import { useDispatch } from "react-redux";

function PostCreate() {
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState("");
  const [images, setImages] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const activeVoiceHandler = () => {
    SpeechRecognition.startListening({ continuous: true });
    setIsSpeaking(true);
  };

  const deactiveVoiceHandler = () => {
    SpeechRecognition.stopListening();
    setIsSpeaking(false);
    resetTranscript();
  };

  useEffect(() => {
    setPostContent((p) => p + finalTranscript);
    resetTranscript();
  }, [finalTranscript, resetTranscript]);

  const postContentHandler = (
    event: FormEvent & { target: HTMLTextAreaElement }
  ) => {
    setPostContent(event.target.value);
  };

  const fileUploadHandler = (event: any) => {
    setFileUpload(event.target.files);
    const selectedFIles: any = [];
    const targetFiles = event.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(selectedFIles);
  };

  const postCreateHandler = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < fileUpload.length; i++) {
      formData.append("imagefiles", fileUpload[i]);
    }
    formData.append("content", postContent);

    CreatePost(dispatch, formData);

    setPostContent("");
    setImages([]);
    setFileUpload("");
  };

  return (
    // Post Create - START
    <div className="newsfeed-section__post-create">
      <form onSubmit={postCreateHandler}>
        <textarea
          placeholder="Type..."
          onChange={postContentHandler}
          value={postContent}
        ></textarea>
        <div className="uploaded-images">
          {images.length > 0
            ? images.map((i: any) => (
                <div key={i} className="uploaded-image">
                  <img src={i} alt="UploadedImages" />
                </div>
              ))
            : ""}
        </div>
        <div className="post-create__bottom">
          <div>
            <label>
              <input
                type="file"
                accept="image/*"
                name="imagefiles"
                multiple
                onChange={fileUploadHandler}
              />
              <i className="fa-solid fa-image"></i>
              Upload Photo
            </label>
            {SpeechRecognition.browserSupportsSpeechRecognition() &&
            isSpeaking ? (
              <Button
                type="button"
                className="microphone-off"
                buttonIcon="fa-solid fa-microphone-slash"
                onClick={deactiveVoiceHandler}
              />
            ) : (
              <Button
                type="button"
                className="microphone-on"
                buttonIcon="fa-solid fa-microphone"
                onClick={activeVoiceHandler}
              />
            )}
          </div>
          <Button type="submit" className="btn" innerText="Share" />
        </div>
      </form>
    </div>
    // Post Create - END
  );
}

export default PostCreate;
