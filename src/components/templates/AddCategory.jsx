import { useState } from "react";

const AddCategory = () => {
  const [form, setFrom] = useState({ name: "", slug: "", icon: "" });
  const changeHandler = (e) => {
    setFrom({ ...form, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته جدید</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">ثبت</button>
    </form>
  );
};

export default AddCategory;
