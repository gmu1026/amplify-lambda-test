import React from "react";
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
import FormData from "form-data";

function Form() {
  const { register, handleSubmit, setValue } = useForm();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";

      console.log(fullAddress);

      setValue("address", data.address);
    }
  };

  const send = (data) => {
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("address", data.address);
    // formData.append("detail_address", data.detail_address);
    // formData.append("image", data.image[0]);

    axios
      .post(
        "https://u120p3poi0.execute-api.ap-northeast-2.amazonaws.com/dev/test",
        {
          name: data.name,
          address: data.address,
          detail_address: data.detail_address,
          image: data.image,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        alert("등록 완료");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(send)} encType="multipart/form-data">
      <label>
        Name:
        <input type="text" name="name" ref={register} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" ref={register} />
      </label>
      <DaumPostcode onComplete={handleComplete} />
      {/* <button onClick={openModal}>주소 검색</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>주소 찾기</h2>
        <button onClick={closeModal}>Close</button>
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
      <br />
      <label>
        Detail_Address:
        <input type="text" name="detail_address" ref={register} />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          name="image"
          ref={register}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
