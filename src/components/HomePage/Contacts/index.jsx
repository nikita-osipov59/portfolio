import ContactsStyle from "./Contacts.module.scss";
import { Title } from "@/components/ui/Title";

const Contacts = () => {
  return (
    <section id="contacts" className={ContactsStyle.contacts}>
      <Title prefix="#" title="Контакты" />
      <div className={ContactsStyle.wrapper}>
        <p>Открыт для предложений, сотрудничества и тд.</p>
      </div>
    </section>
  );
};

export default Contacts;
