import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import ParticipantsList from "../components/ParticipantsList";

const Configuration = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Configuration;
