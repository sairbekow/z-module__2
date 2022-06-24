//styles
import "../css/index.scss";

//modules
import Modal from './modules/Modal/Modal'
import ModalForm from "./modules/Modal/ModalForm";
import Sidebar from "./modules/Sidebar/Sidebar";
import NavMenu from "./modules/Header/NavMenu";
import ConsultationForm from "./modules/ConsultationForm";

//initialize
window.addEventListener('DOMContentLoaded', () => {
  new Modal().initialize()
  new ModalForm().initialize()
  new Sidebar().initialize()
  new NavMenu().initialize()
  new ConsultationForm().initialize()
})