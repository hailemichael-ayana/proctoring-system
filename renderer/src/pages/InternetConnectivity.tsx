import Button from "../components/Button"

const InternetConnectivity = () => {
  return (
    <div className="h-[80%] w-full  flex flex-col gap-10  items-center py-10">
      <h1 className="text-5xl">Pre Exam Set ups</h1>
      <div className="flex w-full h-full  justify-center p-10 gap-10">
      <div className="w-[40%]  h-full border rounded-2xl flex items-center justify-center">
        <p>checking the Internet connectivity please wait ...</p>
      </div>
      <div className="w-[40%] space-y-4">
        <div className="flex gap-2 ">
          <div className=" w-7 h-2.5 border rounded bg-[#0070cb] border-[#0070cb]" />
          <div className=" w-7 h-2.5 border rounded border-[#0070cb]" />
          <div className=" w-7 h-2.5 border rounded border-[#0070cb]" />
          <div className=" w-7 h-2.5 border rounded border-[#0070cb]" />
          <div className=" w-7 h-2.5 border rounded border-[#0070cb]" />
          <div className=" w-7 h-2.5 border rounded border-[#0070cb]" />
        </div>
        <h3 className="text-2xl font-semibold ">Troubleshooting Guide</h3>
        <p className="text-[16px] text-[#ddd] font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi ex, quidem, totam quibusdam a omnis adipisci mollitia, nobis neque nam velit aliquid atque perferendis. Cum impedit pariatur rem tempora?</p>
      </div>
      </div>
      <Button className="bg-[#1F7FCC]" text="Continue" />
    </div>
  )
}

export default InternetConnectivity