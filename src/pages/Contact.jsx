import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => {}
  const handleBlur = () => {}
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: '周文峰',
        fromm_email: form.email,
        to_email: '',
        message: form.message
      }
    )
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">联系方式</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            姓名
            <input
              type="text"
              name="name"
              className="input"
              placeholder="你的名字"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            邮箱
            <input
              type="email"
              name="email"
              className="input"
              placeholder="你的邮箱"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            留言
            <textarea
              type="text"
              rows={4}
              name="message"
              className="textarea"
              placeholder="我可以帮你什么？"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "发送中..." : "发送"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
