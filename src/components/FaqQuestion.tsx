import { IoAdd } from "react-icons/io5";

type Props = { question: string; answer: string };

const FaqQuestion = ({ question, answer }: Props) => {
  return (
    <div className="relative border border-gray-200 bg-white p-6 rounded-lg">
      <div className="absolute top-2 right-2 cursor-pointer hover:text-gray-500">
        <span className=" text-4xl text-gray-500">
          <IoAdd />
        </span>
      </div>
      <h2 className="text-lg text-gray-900 title-font mb-2 font-bold">
        {question}
      </h2>
      <p className="leading-relaxed text-base">{answer}</p>
    </div>
  );
};

export default FaqQuestion;
