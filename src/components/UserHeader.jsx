import "../style/UserHeader.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileSuccess, updateUserProfileFail} from "../actions/userAction";
import { updateUserProfile} from "../services/user";

export default function UserHeader() {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.userProfile.firstName);
  const lastName = useSelector((state) => state.userProfile.lastName);
  const { token } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userLogin);

  const [newFirstname, setNewFirstname] = useState();
  const [newLastname, setNewLastname] = useState();

  const [editButton, setEditButton] = useState("");

  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton((current) => !current);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateUserProfile(token, newFirstname, newLastname)
      .then((response) => {
        dispatch(updateUserProfileSuccess(newFirstname, newLastname));
        setEditButton((current) => !current);
      })
      .catch((error) => {
        console.log("erreur détectée")
        dispatch(updateUserProfileFail(error));
      });
    };

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastname(e.target.value)}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
