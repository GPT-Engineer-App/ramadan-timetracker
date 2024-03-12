import React, { useState, useEffect } from "react";
import { Box, VStack, Heading, Text, Select, useToast, Button, Center } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaBell } from "react-icons/fa";

const Index = () => {
  const [timeZone, setTimeZone] = useState("Asia/Kolkata"); // Initial timezone set to Srinagar's timezone

  // Placeholder times for Sehri and Iftar
  const [sehriTime, setSehriTime] = useState("04:30 AM");
  const [iftarTime, setIftarTime] = useState("07:15 PM");

  // Use a toast for notifications
  const toast = useToast();

  useEffect(() => {
    // TODO: Fetch Sehri and Iftar times from Aladhan API based on user's geolocation
    // For now, we're using placeholders
    // Alarm functionality should be set up here using the Web Audio API
    // This is just a placeholder for the actual alarm setup
  }, [timeZone]);

  const handleChangeTimeZone = (event) => {
    setTimeZone(event.target.value);
    // TODO: Update Sehri and Iftar times based on the new time zone
  };

  const triggerAlarm = () => {
    // Placeholder function to trigger alarm
    toast({
      title: "Alarm",
      description: "It's time for prayer.",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Center h="100vh" bg="green.100">
      <VStack spacing={8} p={8} bg="white" boxShadow="xl" borderRadius="md">
        <Heading>Ramadan 2024 - Prayer Times</Heading>
        <Box>
          <Button
            leftIcon={<FaMapMarkerAlt />}
            onClick={() => {
              /* TODO: Implement geolocation */
            }}
          >
            Detect Location
          </Button>
        </Box>

        <Select value={timeZone} onChange={handleChangeTimeZone}>
          <option value="Asia/Kolkata">Srinagar (Asia/Kolkata)</option>
          {/* Add other time zones as needed */}
        </Select>

        <VStack spacing={4} alignItems="stretch">
          <Text>Sehri Time: {sehriTime}</Text>
          <Text>Iftar Time: {iftarTime}</Text>
        </VStack>

        <Button leftIcon={<FaBell />} colorScheme="blue" onClick={triggerAlarm}>
          Test Alarm
        </Button>

        {/* Islamic Calendar for Ramadan */}
        <Box>
          <Heading size="md">Islamic Calendar</Heading>
          {/* TODO: Display the Islamic calendar for Ramadan */}
          <Text>1st Ramadan 1445 AH</Text>
          {/* Add more dates as needed */}
        </Box>
      </VStack>
    </Center>
  );
};

export default Index;
