import { PencilIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateInStart,
  updateInSuccess,
  updateInFailure,

  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
} from "../Redux/User/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePer] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [userUpdateSuccess, setUserUpdateSuccess] = useState(false);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePer(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateInStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, role: currentUser.role }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateInFailure(data.message));
        return;
      }

      dispatch(updateInSuccess(data));
      setUserUpdateSuccess(true);
    } catch (error) {
      dispatch(updateInFailure(error.message));
    }
  };



  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("/api/auth/sign-out");
      const data = await res.json();
      if (data === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
      dispatch(signoutUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto bg-white mt-4">
      <h1 className="text-3xl font-semibold text-center my-7 text-[#509FEA]">
        Admin Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt="Profile"
        />
        <PencilIcon className="h-6 w-6 text-[#1C83E5] self-center -mt-10 -mr-8" />

        <p className="text-sm self-center">
          {fileUploadError ? (
            <span>Error Image upload image must be less than 2 MB</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          readOnly
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-[#1C83E5] text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>

      <div className="flex justify-end mt-5">
        <span
          onClick={handleSignOut}
          className="text-[#E73636] cursor-pointer hover:underline"
        >
          Sign out
        </span>
      </div>
      <p className="text-[#E73636] mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-2">
        {userUpdateSuccess ? "User Update Successfully" : ""}
      </p>
    </div>
  );
};

export default AdminProfile;
