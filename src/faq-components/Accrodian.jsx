import React from "react";
import { TbPlus } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import Collapsible from "react-collapsible";
import { useState } from "react";
import cls from "classnames";
const data = [
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        How often can I start my business from your consulting?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        How can you help me with my business?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Where should I get support from deksa?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Where should I get support from deksa?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Where should I get support from deksa?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Where should I get support from deksa?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Is there any way to get fund for startup?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
  {
    title: (
      <p>
        <TbPlus size={20} className="translate-y-1" />
        Where should I get support from deksa?
      </p>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat .",
  },
];

export default function Accrodian({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      trigger={
        <>
          <p
            className={cls(
              "select-none flex items-start gap-2 text-lg font-medium px-3 py-2 shadow-xl"
            )}
          >
            {isOpen ? (
              <IoCloseSharp size={20} className="translate-y-1 duration-150" />
            ) : (
              <TbPlus size={20} className="translate-y-1 duration-150" />
            )}
            <span className="lineClamp">{title}</span>
          </p>
        </>
      }
      transitionCloseTime={200}
      transitionTime={200}
      easing={"linear"}
      openedClassName="opened"
      triggerClassName="default"
      triggerOpenedClassName="opened"
      onClose={() => setIsOpen(!isOpen)}
      onOpen={() => setIsOpen(!isOpen)}
    >
      <p className={cls("px-10 pb-5 pt-2")}>{desc}</p>
    </Collapsible>
  );
}
