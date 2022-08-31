import { useNavigate } from "react-router-dom";
import { routeModuleFactory } from "../../routes/routes";
import ModuleForm from "../../components/ModuleForm";

export interface NewModuleProps {
    onClose: () => void;
}

const NewModule: React.FC<NewModuleProps> = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <ModuleForm
            formTitle={"New module"}
            onSave={() => {
                navigate(routeModuleFactory(0));
            }}
            onCancel={onClose}
        />
    );
};

export default NewModule;
