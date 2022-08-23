import React from "react";
import Accrodian from "./Accrodian";

export default function AccrodianWrapper() {
  return (
    <section className="flex flex-col md:flex-row gap-5">
      <div className="space-y-5">
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"How often can I start my business from your consulting?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"How can you help me with my business?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Where should I get support from deksa?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Where should I get support from deksa?"}
        />
      </div>
      <div className="space-y-5">
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Where should I get support from deksa?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Where should I get support from deksa?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Is there any way to get fund for startup?"}
        />
        <Accrodian
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat ."
          }
          title={"Where should I get support from deksa?"}
        />
      </div>
    </section>
  );
}
