import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Input label="Email" type="email" placeholder="Enter your email" />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Card title="Welcome">
          <p>This is a simple card component.</p>
        </Card>
        <Card title="Info">
          <p>Cards can contain text, images, and more.</p>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Hello!"
        >
          <p>This is a modal component.</p>
        </Modal>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Alert type="info">This is an info alert.</Alert>
        <Alert type="success">This is a success alert.</Alert>
        <Alert type="warning">This is a warning alert.</Alert>
        <Alert type="danger">This is a danger alert.</Alert>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
    </>
  );
}

export default App;
