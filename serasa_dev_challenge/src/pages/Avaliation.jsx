import React from "react";
import { useState } from "react";
import { VStack, Image, HStack, Input, Textarea, FormControl, FormLabel, Button, useToast, Stack, Text, Heading} from "@chakra-ui/react";
import { Star } from "../components/Star";
import logo from "../assets/serasa-logo-full.svg";

export function Avaliation() {

  const handleClick = (id) => {
    setRating(id);
  };

  const starsCount = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(1);
  const [fullName, setfullName] = useState("");
  const [commentary, setCommentary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const APIMock = () => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      setTimeout(() => {
        const success = Math.random() >= 0.5;
        if (success) {
          resolve("Seu feedback foi recebido.");
          console.log({
            "fullname": fullName,
            "commentary": commentary,
            "rating": rating
          });
          toast({
            title: 'Obrigado!',
            description: "Seu feedback foi recebido. 😁",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        } else {
          reject("Alguma saiu do esperado, tente novamente");
          toast({
            title: 'Não foi dessa vez. 🙁',
            description: "Alguma saiu do esperado, tente novamente...",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      }, 3000);
    });
  };

  return (
    <Stack direction={"column"} w={'100vw'} minH={'100vh'} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
    <VStack maxWidth={{"lg": "35%", "md": "55%", "sm": "80%"}} justifyContent={"center"} alignContent={'center'} p={'24px 18px'}>
      <Image alt='Esta é a logo da empresa Serasa' pb={7} src={logo} ></Image>
      <Text as={"h1"} textStyle={"headingM"} pb={4}>Conte-nos o quanto você está satisfeito com nossos serviços!</Text>
      <Text as={"h4"} textStyle={"headingS"} pb={2}>Marque de 1 à 5 estrelas:</Text>
      <HStack w={'100%'} justifyItems={"center"} alignContent={"center"} justifyContent={"center"}>
      {starsCount.map((star, index) => (
          <Star
            key={index}
            id={star}
            onClick={() => handleClick(star)}
            rating={rating}
          />
        ))}
      </HStack>
      <VStack w={"100%"} as={"form"} onSubmit={(e)=>{
        e.preventDefault();
        APIMock()
        .then((res) =>{
          console.log(res);
          setIsLoading(false);
          setfullName("");
          setCommentary("");
        }).catch((err)=>{
          setIsLoading(false);
          console.error(err);
        });
      }}>
          <FormControl w={"100%"} as={VStack} alignItems={"start"} pb={7} pt={7}>
          <Text textStyle={"headingXS"} as={FormLabel}>Nome Completo:</Text>
          <Input _focus={{borderColor: "brand.accent", borderStyle: "solid", borderWidth: "2px", boxShadow: "none"}} required name="FullName" value={fullName} onChange={(e)=>{setfullName(e.currentTarget.value)}}/>
          </FormControl>
          <FormControl w={"100%"} as={VStack} alignItems={"start"} pb={7}>
            <Text textStyle={"headingXS"} as={FormLabel}>Comentário:</Text>
            <Textarea _focus={{borderColor: "brand.accent", borderStyle: "solid", borderWidth: "2px", boxShadow: "none"}} name="Commentary" value={commentary} onChange={(e)=>{setCommentary(e.currentTarget.value)}} />
          </FormControl>
          <Button aria-label="Enviar Formulário" letterSpacing={'wider'} _hover={{bg: "rgba(227, 28, 121, 1)"}} loadingText={"Enviando"} isLoading={isLoading} w={"100%"} type="submit" variant={'solid'} bgColor={'brand.accent'} color={"brand.light-solid"}>Enviar Avaliação</Button>
        </VStack> 
    </VStack>
    </Stack>
  )
}