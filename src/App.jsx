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
  Tabs,
  Switch,
  BadgeCounter,
  Stepper,
  Drawer,
  Slider,
  Rating,
  Breadcrumb,
  DatePicker,
  Textarea,
  FileUpload,
  RadioGroup,
  Sidebar,
  Snackbar,
  PieChart,
  LineChart,
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

  const tabItems = [
    { label: "Home", content: <p>Welcome to the home page!</p> },
    { label: "Profile", content: <p>This is your profile section.</p> },
    { label: "Settings", content: <p>Manage your settings here.</p> },
  ];

  const [isEnabled, setIsEnabled] = useState(false);

  const steps = ["Start", "Processing", "Review", "Complete"];
  const [activeStep, setActiveStep] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState(50);

  const [rating, setRating] = useState(3);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
    { label: "Product", href: "/product" },
  ];

  const [date, setDate] = useState("");

  const [text, setText] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const [selectedOption, setSelectedOption] = useState("option1");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const [showSnackbar, setShowSnackbar] = useState(false);

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

      <div className="flex flex-col items-center gap-4 p-10">
        <Tabs tabs={tabItems} defaultIndex={0} />
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Switch checked={isEnabled} onChange={setIsEnabled} />
        <p>Switch is {isEnabled ? "ON" : "OFF"}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <div className="relative">
          <span className="px-4 py-2 bg-gray-300 rounded-lg">
            Notifications
          </span>
          <BadgeCounter
            count={5}
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Stepper steps={steps} activeStep={activeStep} />
        <button
          onClick={() =>
            setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Next Step
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Open Drawer
        </button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-lg font-semibold">Drawer Content</h2>
          <p>This is some content inside the drawer.</p>
        </Drawer>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Slider value={value} min={0} max={100} step={5} onChange={setValue} />
        <p>Selected Value: {value}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Rating max={5} value={rating} onChange={setRating} />
        <p>Selected Rating: {rating}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <DatePicker value={date} onChange={setDate} />
        <p>Selected Date: {date}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <Textarea
          label="Your Message"
          value={text}
          onChange={setText}
          placeholder="Type your message..."
        />
        <p>Typed Text: {text}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <FileUpload label="Upload File" onFileSelect={setSelectedFile} />
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <RadioGroup
          label="Select an option"
          options={options}
          selectedValue={selectedOption}
          onChange={setSelectedOption}
        />
        <p>Selected Option: {selectedOption}</p>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Open Sidebar
        </button>

        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-lg font-semibold">Sidebar Menu</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Settings</li>
            <li className="hover:text-blue-500 cursor-pointer">Logout</li>
          </ul>
        </Sidebar>
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <button
          onClick={() => setShowSnackbar(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Show Snackbar
        </button>

        {showSnackbar && (
          <Snackbar
            message="This is a snackbar!"
            type="success"
            duration={3000}
            onClose={() => setShowSnackbar(false)}
          />
        )}
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
        <PieChart data={data} />
      </div>

      <div className="flex flex-col items-center gap-4 p-10">
      <h2 className="text-lg font-semibold">Monthly Sales</h2>
      <LineChart data={data} />
    </div>
    </>
  );
}

export default App;
