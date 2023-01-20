import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsArrowRightCircle, BsCashCoin, BsGift } from "react-icons/bs";
import { SiPaytm } from "react-icons/si";
import { MdOutlineQrCode2 } from "react-icons/md";
import CreditCard from "./Components/CreditCard";
import Cod from "./Components/Cod";

function PaymentPage({
  count = 2,
  item = {},
  rs = 200,
  discount = 25,
  shipping = 0,
}) {
  return (
    <Flex
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      gap={{
        base: 10,
        sm: 10,
        md: 10,
        lg: 0,
        xl: 0,
        "2xl": 0,
      }}
      border="px solid black"
      width="90%"
      margin="auto"
      justifyContent="space-around"
      marginTop="20px"
      marginBottom="20px"
      padding="10px"
    >
      <Flex
        direction="column"
        gap="10"
        border="px solid red"
        width={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "60%",
          xl: "60%",
          "2xl": "60%",
        }}
      >
        <Flex direction="column">
          <Heading
            as="h1"
            fontSize="36px"
            fontWeight="600"
            fontFamily="Inter,sans-serif"
          >
            Choose payment method
          </Heading>
          <Text fontSize="14px" fontFamily="Inter,sans-serif">
            Choose the Payment method you prefer
          </Text>
        </Flex>

        <Flex direction="column" gap="3">
          <Text fontSize="20px" fontWeight="600" fontFamily="sans-serif">
            Payment Method Options
          </Text>
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            borderTop="1px solid grey"
            borderRight="1px solid grey"
            borderLeft="1px solid grey"
            borderRadius="1rem"
            gap="10"
            padding="5px"
          >
            <Flex
              direction="column"
              gap="0.5"
              border="0px solid blue"
              marginLeft="10px"
            >
              <Flex
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <AiOutlineCreditCard size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Credit/Debit Card
                  </Heading>
                  <Text color="grey">Visa,Mastercard,Rupay & more</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <BsCashCoin size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Cash on delivery
                  </Heading>
                  <Text color="grey">Pay at your doorstep</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <BsGift size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Gift card
                  </Heading>
                  <Text color="grey">One card for all Nykaa apps</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <SiPaytm size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Paytm Wallet
                  </Heading>
                  <Text color="grey">Link your Paytm wallet and pay</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
              <Flex
                gap="1"
                border="1px solid grey"
                padding="2"
                boxShadow="md"
                borderRadius="10px"
              >
                <Box border="0px solid red">
                  <MdOutlineQrCode2 size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    UPI
                  </Heading>
                  <Text color="grey"> Google Pay, PhonePe, Paytm & more</Text>
                </Flex>
                <Box border="0px solid red" margin="auto">
                  <BsArrowRightCircle size="25" />
                </Box>
              </Flex>
            </Flex>
            <Box border="0px solid black" marginTop="5px">
              {" "}
              <CreditCard />
              {/* <Cod /> */}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        border="0px solid yellow"
        margin="auto"
        marginTop="-8"
        gap="10"
      >
        <Box>
          <Image
            src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg"
            width=""
            height=""
            alt=""
          />
        </Box>
        <Box width={"80%"}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Bag
                    </Heading>
                    {<Heading fontSize="14px">{count} Items</Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                justifyContent={"space-between"}
              >
                <Image src={""} alt="Image" boxSize="90px" objectFit="cover" />
                <Text>{"demo"}</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Deliver To
                    </Heading>
                    {<Heading fontSize="14px">Saurav, 811106 </Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} display="flex">
                <Text width="200px">
                  at Naya tola chakshivganj po ps Surajgarha district lakhisarai
                  pincode 811106 state bihar Landmark: near mantu dial centre,
                  Bihar Surajgarha-811106 9572365331
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Price Details
                    </Heading>
                    {
                      <Heading fontSize="14px">
                        ₹{rs * count - discount + shipping}
                      </Heading>
                    }
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Bag MRP (1 items)</span>
                  <span>₹{rs}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Bag Discount</span>
                  <span>₹{discount}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Shipping</span>
                  <span>
                    {shipping == 0 ? (
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#2de02d",
                        }}
                      >
                        Free
                      </span>
                    ) : (
                      "₹" + shipping
                    )}
                  </span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  <span>You Pay</span>{" "}
                  <span>₹{rs * count - discount + shipping}</span>{" "}
                </Heading>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box display="flex" gap="10px" mt="12px" p="12px 17px">
            <Text fontSize={"12px"}>
              Buy authentic products. Pay securely. Easy returns and exchange
            </Text>
            <Image
              w="39px"
              h="37px"
              src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
              alt="image"
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default PaymentPage;
