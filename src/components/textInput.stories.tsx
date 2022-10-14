import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput,  TextInputRootProps } from "./TextInput";

export default {
  titulo: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
        

        <TextInput.Icon>
            <Envelope />
         </TextInput.Icon>,    

        <TextInput.Input placeholder="Type your e-mail address"></TextInput.Input>
    ]
    
  },
  argTypes: {
    asChild: {
        table: {
            disable: true, 
        }
    }
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const Without: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address"></TextInput.Input>
  }
};