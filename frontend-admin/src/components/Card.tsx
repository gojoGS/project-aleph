import { truncate } from "../util/text";

interface CardProps {
    title: string;
    description: string;
    buttonTitle: string | JSX.Element;
    onButtonClick: () => void;
    onCardClick: () => void;
    selected: boolean;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    buttonTitle,
    onButtonClick,
    onCardClick,
    selected,
}) => {
    const selectedStyleFactory = () => {
        return {
            container: selected ? "border-secondary" : "hover:border-primary",
            button: selected ? "btn-secondary" : "btn-primary",
        };
    };

    return (
        <div
            onClick={onCardClick}
            className={
                "border-4 shadow-xl cursor-pointer card w-80 max-w-xs aspect-square bg-base-100 card-bordered " +
                selectedStyleFactory().container
            }
        >
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <button
                        className={
                            "btn btn-outline " + selectedStyleFactory().button
                        }
                        onClick={onButtonClick}
                    >
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
