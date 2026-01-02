import Button from "./Components/Button";
import HoverImage from "./Components/HoverImage";
import ResponsiveText from "./Components/ResponsiveText";
import StyledList from "./Components/StyledList";
import Card from "./Components/Card";
import Table from "./Components/Table";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";

function App() {
  return (
    <div className="space-y-12 p-6 bg-gray-100">
      <Navbar />
      <ResponsiveText />
      <Button />
      <HoverImage />
      <StyledList />
      <Card />
      <Table />
      <Form />
      <Grid />
    </div>
  );
}

export default App;
