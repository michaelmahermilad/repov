import React, { useState } from "react";
import logo from '../../public/logo.webp'
import Image from "next/image";
const ChurchServicesTable = () => {
  const services = [
    {
      day: "السبت",
      activities: [
        { time: "٧-٩ م", event: "درس كتاب", place: "قاعة مارينا و فبرونيا" },
        { time: "٦-٩ م", event: "مدرسة بولس الرسول للتعليم و التلمذة", place: "كنيسة العذراء" },
        { time: "٦-٩ م", event: "أسرة البابا كيرلس عمود الدين لإعداد الخدام", place: "كنيسة الملاك" },
      ],
    },
    {
      day: "الأحد",
      activities: [
        { time: "٥-٧ م", event: "اجتماع الحرفيين", place: "كنيسة الملاك" },
        { time: "٧-٩ م", event: "الاجتماع العام", place: "كنيسة العذراء" },
        { time: "٧-٩ م", event: "اجتماع مكسيموس و دوماديوس للخريجين", place: "كنيسة العذراء" },
      ],
    },
    {
      day: "الاثنين",
      activities: [{ time: "٧-٩ م", event: "اجتماع الصلاة", place: "كنيسة العذراء" }],
    },
    {
      day: "الثلاثاء",
      activities: [{ time: "٧-٩ م", event: "أسرة الأنبا أنطونيوس للكورسات المتخصصة", place: "كنيسة الملاك" }],
    },
    {
      day: "الأربعاء",
      activities: [{ time: "٧-٩ م", event: "اجتماع الأسرة", place: "كنيسة الملاك" }],
    },
    {
      day: "الخميس",
      activities: [
        { time: "٧-٩ م", event: "اجتماع الخدام", place: "كنيسة الملاك" },
        { time: "٦-٩ م", event: "العشية و مدرسة الشمامسة", place: "كنيسة العذراء" },
      ],
    },
    {
      day: "الجمعة",
      activities: [
        { time: "٩-٥ م", event: "التربية الكنسية (مدارس أحد و كشافة)", place: "—" },
        { time: "٥-٧ م", event: "اجتماع تاماف إيريني للسيدات", place: "كنيسة العذراء" },
        { time: "٧-٩ م", event: "اجتماع حضن الأب للمتزوجين حديثًا", place: "كنيسة العذراء" },
        { time: "٧-٩ م", event: "اجتماع مارمرقس للجامعيين", place: "كنيسة العذراء" },
      ],
    },
  ];

  const [selectedActivity, setSelectedActivity] = useState(null);

  // استخراج جميع أسماء الفعاليات بدون تكرار
  
const allActivities = services.flatMap((s) =>
  s.activities.map((a) => ({
    ...a,      // time, event, place
    day: s.day // add the day
  }))
);
  return (
    <div dir="rtl" className="  text-[13px]  mt-9  flex flex-col items-center space-y-6">
      {/* بطاقة الفعالية المنبثقة */}
     {selectedActivity && (
  <div style={
{zIndex:1000000}
  } className="fixed inset-0 min-h-screen flex items-center justify-center z-50 bg-black/40">
    {/* Card */}
    <div className="relative bg-gray-100 border-0 border-[#7E1215] rounded-md shadow-6xl w-80 md:w-100 p-6 text-center flex flex-col items-center animate-fade-in">
      {/* Close button */}
      <button
        onClick={() => setSelectedActivity(null)}
        className="absolute top-3 right-3 text-[#7E1215] p-[8px] text-[15px] hover:[#7E1215]  font-bold"
      >
        ✕
      </button>

      {/* Optional Image */}
    
<Image src={logo} width={100} alt='M' className=' w-[100px] lg:w-[180px] mb-[12px]    '    />

      {/* Event Info */}
      <h3 className="text-[#7E1215] text-[15px] font-bold text-[#7E1215] mb-4">{selectedActivity.event}</h3>
      <p className="text-gray-700 text-[14px] mb-1">📅 {selectedActivity.day}</p>
      <p className="text-gray-700 text-[14px] mb-1">🕓 {selectedActivity.time}  {selectedActivity.place}</p>
 
      {/* Optional Highlight */}
      <div className="mt-2 w-24 h-1 bg-[#7E1215] rounded-full animate-pulse"></div>
    </div>
  </div>
)}

      {/* الأزرار */}

            <p className=" text-[15px] mb-8 mt-9 font-bold"> مواعيد الخدمات </p>

    <div className="flex flex-wrap justify-center gap-3">
  {allActivities.map((act, index) => (
    <button
      key={index}
      onClick={() => setSelectedActivity(act)}
      className="bg-[#7E1215] hover:bg-[white] text-white hover:text-[#7E1215] hover:border-[#7E1215] cursor-pointer font-medium px-4 py-2 rounded-full shadow-2xl transition font-bold"
    >
      {act.event}
    </button>
  ))}
</div>

      {/* الجدول */}
      <div className="w-full max-w-7xl bg-white shadow-lg   overflow-hidden mt-10">
       

        <table className="w-full border-collapse text-right">
          <thead>
            <tr className="bg-[#7E1215] text-white text-[14px] text-center">
              <th className="p-3 border border-gray-300 w-[10%]">اليوم</th>
              <th className="p-3 border border-gray-300  w-[15%]">الوقت</th>
              <th className="p-3 border border-gray-300 ">الخدمة</th>
              <th className="p-3 border border-gray-300  w-[25%]">المكان</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <React.Fragment key={index}>
                {service.activities.map((act, i) => (
                  <tr
                    key={i}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition  cursor-pointer`}
                  >
                    {i === 0 && (
                      <td
                        rowSpan={service.activities.length}
                        className="p-3 text-center font-semibold text-gray-800 border border-gray-300 align-middle bg-blue-50"
                      >
                        {service.day}
                      </td>
                    )}
                    <td className="p-3 text-gray-800 border border-gray-300 text-center ">{act.time}</td>
                    <td className="p-3 text-gray-800 border border-gray-300">{act.event}</td>
                    <td className="p-3 text-gray-800 border border-gray-300">{act.place}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChurchServicesTable;
