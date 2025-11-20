import Button from "../components/button";

export default function What() {
  return (
    <div className="container">
      {/* <TitleSection titre={titre.}/> */}

      <div className="flex items-center justify-between gap-6 my-24">
        <div className="bg-[url(/images/placeholder.svg)] bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5">
        <h3 className="text-3xl font-bold">FOR INSTRUCTORS</h3>
        <Button className="bg-transparent border-2 " text="Commencer maintenant"/>
        </div>
        <div className="bg-[url(/images/placeholder.svg)] bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5">
        <h3 className="text-3xl font-bold">FOR INSTRUCTORS</h3>

        <Button className="bg-purple-700 text-white " text="Commencer maintenant"/>
        </div>
      </div>
    </div>
  );
}

// What isSkilline?

// Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
