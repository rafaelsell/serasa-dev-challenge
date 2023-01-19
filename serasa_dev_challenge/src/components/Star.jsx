import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Star = ({id, rating, onClick}) => {
    if (id <= rating) {
      return (
      <IconButton _hover={{backgroundColor: "transparent"}} onClick={onClick} fontSize={"1.3em"}  bgColor={"transparent"} bgClip={"content-box"} icon={<StarIcon _hover={{color: "rgba(227, 28, 121, 1)"}} color={"brand.accent"}/>}/>
      );
    } else {
      return (
        <IconButton _hover={{backgroundColor: "transparent"}} onClick={onClick} fontSize={"1.3em"}  bgColor={"transparent"} bgClip={"content-box"} icon={<StarIcon _hover={{color: "rgba(227, 28, 121, 0.3)"}} color={"brand.unselected"}/>}/>
        );
  }
  };