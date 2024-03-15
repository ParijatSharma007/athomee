"use client";
import React from "react";
import Container from "../Container";
import PluseBtnIcon from "@/json/icons/PluseBtnIcon";
import { Button } from "../ui/CustomButtonPrimary/CustomButtonPrimary";
import CreateCollectionModal from "../CreateCollectionModal/CreateCollectionModal";

export default function SavedHeader() {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center mb-6 lg:mb-2 sm:mb-0">
          <h2 className="text-4xl lg:text-3xl sm:font-satoshi_regular">
            Saved
          </h2>
          <CreateCollectionModal />
        </div>
      </Container>
    </div>
  );
}
