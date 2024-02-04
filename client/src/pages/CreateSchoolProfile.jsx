import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateSchoolProfile() {
  const { currentUser, role } = useSelector((state) => state.user);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zonal: "",
    type: "mix",
    totalStudent: 100,
    totalTeacher: 10,
    maths: false,
    bio: false,
    commerce: false,
    art: false,
    tech: false,
    description: "",
    imageUrls: [],
  });
  console.log(formData);

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  console.log(formData);

  const handleImageSubmit = async (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 5) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed ( 2mb max per image)");
        });
    } else {
      setImageUploadError("You can only 4 image per listing");
      setUploading(false);
    }
  };

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  };

  const handlePhotoDelete = (index) => {
    setFormData({
      ...setFormData,
      imageUrls: formData.imageUrls.filter((_, i) => i != index),
    });
  };

  const handleChange = (e) => {
    if (
      e.target.type === "text" ||
      e.target.type === "number" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    if (
      e.target.id === "maths" ||
      e.target.id === "bio" ||
      e.target.id === "commerce" ||
      e.target.id === "art" ||
      e.target.id === "tech"
    ) {
      setFormData({
        ...formData,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }
    if (e.target.id === "type") {
      setFormData({
        ...formData,
        type: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      setError(false);
      const res = await fetch("/api/school/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userRef: currentUser._id }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
       return setError(data.message);  
      }
      navigate("/admin-dashbord");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="sm:flex ">
      <div className=" ">
        <AdminSideMenu />
      </div>
      <div className="sm:pr-20 m-3 sm:m-8 sm:w-full flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[#1C83E5] ">
          <PencilSquareIcon className="h-10 w-10" />
          <p className="text-[#1C83E5] text-3xl font-semibold">
            Create school profile
          </p>
        </div>
        <form onSubmit={handleSubmit} disabled={error} className="gap-4 flex flex-col ">
          <div className="flex flex-col w-full">
            <label className="text-[#555555]">
              School name <span className="text-[#E73636]">*</span>
            </label>
            <input
              type="text"
              className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
              id="name"
              onChange={handleChange}
              minLength="10"
              maxLength="62"
            />
          </div>
          <div className="sm:flex sm:gap-4 sm:justify-between">
            <div className="flex flex-col w-full ">
              <label className="text-[#555555]">
                Address <span className="text-[#E73636]">*</span>
              </label>
              <input
                type="text"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="address"
                onChange={handleChange}
                minLength="10"
                maxLength="62"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#555555]">
                Educational Zonal<span className="text-[#E73636]">*</span>
              </label>
              <input
                type="text"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="zonal"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:flex sm:gap-4 sm:justify-between">
            <div className="flex flex-col w-full ">
              <label className="text-[#555555]">
                School type<span className="text-[#E73636]">*</span>
              </label>
              <select
                defaultValue={"mix"}
                id="type"
                className="focus:outline-none p-3.5  border-[#509FEA] border rounded-lg  "
                onChange={handleChange}
              >
                <option value={"mix"}>Mix school</option>
                <option value={"boys"}>Boys school</option>
                <option value={"girls"}>Girls school</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#555555]">
                Total teachers <span className="text-[#E73636]">*</span>
              </label>
              <input
                type="number"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="totalTeacher"
                max="500"
                min="1"
                onChange={handleChange}
                value={formData.totalTeacher}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#555555]">
                Total Student <span className="text-[#E73636]">*</span>
              </label>
              <input
                type="number"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="totalStudent"
                max="5000"
                min="1"
                onChange={handleChange}
                value={formData.totalStudent}
                required
              />
            </div>
          </div>
          <p className="text-xl font-semibold text-[#555555]">
            Available stream{" "}
          </p>
          <div className="flex flex-wrap gap-7 lg:gap-20">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#509FEA] "
                id="maths"
                onChange={handleChange}
                value={formData.maths}
              />
              <label className="text-[#555555]">Physical science</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#509FEA] "
                id="bio"
                onChange={handleChange}
                value={formData.bio}
              />
              <label className="text-[#555555]">Bio science</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#509FEA] "
                id="commerce"
                onChange={handleChange}
                value={formData.commerce}
              />
              <label className="text-[#555555]">Commerce</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#509FEA] "
                id="art"
                onChange={handleChange}
                value={formData.art}
              />
              <label className="text-[#555555]">Art</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#509FEA] "
                id="tech"
                onChange={handleChange}
                value={formData.tech}
              />
              <label className="text-[#555555]">Technology </label>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[#555555]">
              Description <span className="text-[#E73636]">*</span>
            </label>
            <textarea
              type="text"
              className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
              id="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <p className="text-xl font-semibold text-[#555555]">
            Upload school image
          </p>
          <p className="  text-[#555555]">Frist image will be cover</p>
          <div className="flex gap-4 p-3 bg-white rounded-lg">
            <input
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              id="image"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              className="bg-[#1C83E5] text-white p-3 rounded-lg "
              disabled={uploading}
              onClick={handleImageSubmit}
            >
              {uploading ? "Uploading" : "upload"}
            </button>
          </div>
          <p className="text-[#E73636] text-lg self-end">{imageUploadError}</p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={index}
                className="flex justify-between  p-3 border items-center bg-white rounded-lg"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    handlePhotoDelete(index);
                  }}
                  className="bg-[#E73636] text-white rounded-lg p-3 items-center  hover:opacity-75"
                >
                  Delete
                </button>
              </div>
            ))}
          <div className="flex justify-end mt-7">
            <button  className="bg-[#1C83E5] text-white p-3 px-6 rounded-lg ">
              Create
            </button>
          </div>
          {error && <p className="text-[#E73636] text-lg self-end">{error}</p>}
        </form>
      </div>
    </div>
  );
}
