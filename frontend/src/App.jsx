// One-page application with a navigation bar, a hero section,
// and multiple sections for different types of content such as statistics,
// business details, billing information, card deals, testimonials, clients, 
// a call-to-action, and a footer. (JSX allows to write HTML-like code)
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import axios from 'axios'
import { useEffect, useState } from "react";

// App Component
const App = () => {
  // State to store customer data
  const [customers, setCustomers] = useState([]);

  // Function to fetch customer data from the server
  const fetchCustomers = async () => {
    try {
      const SERVER = "http://127.0.0.1:5000/api/customers";
      const response = await axios.get(SERVER);
      setCustomers(response.data);
      console.log(customers);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }

  // useEffect hook to fetch customer data on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  // JSX structure for the entire application
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navigation bar and basic layout */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          {/* Display the number of customers */}
          <h1 style={{ color: "red" }}>Total Customers: {customers && customers.length}</h1>
        </div>
      </div>

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Content sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Individual sections */}
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
