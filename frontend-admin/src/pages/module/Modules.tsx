import { useState } from "react";
import Card from "../../components/Card";
import { noOp } from "../../util/function";
import { truncate } from "../../util/text";
import { useConstraint } from "../../hooks/constraint";
import NewModule from "./NewModule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAnglesRight,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { routeModuleFactory } from "../../routes/routes";
import Modal from "../../components/Modal";
import useModal from "../../hooks/modal";

const dummyModules = [
    {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi labore quod praesentium repellat, sed repudiandae modi provident recusandae consectetur aut, est iste similique? Dolores non vitae et corporis cupiditate.",
        title: "Desc 1",
    },
    {
        title: "Module 2",
        desc: "Desc 2",
    },
    {
        title: "Module 3",
        desc: "Desc 3",
    },
    {
        title: "Module 4",
        desc: "Desc 4",
    },
    {
        title: "Module 4",
        desc: "Desc 4",
    },
    {
        title: "Module 4",
        desc: "Desc 4",
    },
    {
        title: "Module 4",
        desc: "Desc 4",
    },
];

const Modules: React.FC = () => {
    const [selectedModuleIndex, setSelectedModuleIndex] = useState<
        number | null
    >(null);

    const { display } = useConstraint().module;

    const navigate = useNavigate();

    const {
        modalOpen: newModuleFormModalOpen,
        setModalOpen: setNewModuleFormModalOpen,
    } = useModal();

    const onSelectedFactory = (id: number) => {
        return () => {
            setSelectedModuleIndex(id === selectedModuleIndex ? null : id);
            console.log(selectedModuleIndex);
        };
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <h2 className="text-4xl font-medium leading-tight text-primary">
                Modules
            </h2>
            <div className="flex flex-row gap-4">
                <button
                    className="btn"
                    onClick={() => {
                        setNewModuleFormModalOpen(true);
                    }}
                >
                    New
                </button>
                <button
                    className={`btn ${
                        selectedModuleIndex === null ? "btn-disabled" : ""
                    }`}
                >
                    Edit
                </button>
                <button
                    className={`btn btn-warning ${
                        selectedModuleIndex === null ? "btn-disabled" : ""
                    }`}
                >
                    Delete
                </button>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 max-w-screen-2xl">
                {dummyModules.map((m, index) => {
                    return (
                        <Card
                            selected={index === selectedModuleIndex}
                            buttonTitle={
                                <>
                                    <span className={"pr-0.5"}>Lessons</span>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </>
                            }
                            description={truncate(
                                m.desc,
                                display.description.max
                            )}
                            onButtonClick={() => {
                                navigate(routeModuleFactory(index));
                            }}
                            onCardClick={onSelectedFactory(index)}
                            title={truncate(m.title, display.title.max)}
                            key={index}
                        />
                    );
                })}
            </div>

            <Modal modalOpem={newModuleFormModalOpen}>
                <NewModule
                    onClose={() => {
                        setNewModuleFormModalOpen(false);
                    }}
                />
            </Modal>
        </div>
    );
};

export default Modules;
