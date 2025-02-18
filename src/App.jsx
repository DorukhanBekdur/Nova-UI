import { useState, useEffect } from "react";
import {
  Button,
  Tooltip,
  Accordion,
  Avatar,
  Alert,
  Badge,
  Card,
  Input,
  Modal,
  Spinner,
  Toast,
  ProgressBar,
} from "./index";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

      <div className="flex flex-col items-center gap-4 p-10">
        <Tooltip text="This is a tooltip" position="top">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Hover Me
          </button>
        </Tooltip>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Accordion title="What is Nova-UI?">
          <p>
            Nova-UI is a modern React component library built with Tailwind CSS.
          </p>
        </Accordion>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          size="sm"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          size="md"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/56.jpg"
          size="lg"
        />
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <button
          onClick={() => setShowToast(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Show Toast
        </button>

        {showToast && (
          <Toast
            message="This is an info toast!"
            type="info"
            duration={3000}
            onClose={() => setShowToast(false)}
          />
        )}
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <ProgressBar value={progress} max={100} color="blue" />
      </div>
    </>
  );
}

export default App;
