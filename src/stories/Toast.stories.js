import React from "react";
import {Meta} from '@storybook/react'
import Toast from "../components/Toast";

export default{
    title:"Toast",
    component:Toast,
    parameters:{
        componentSubtitle:'A toast'
    },
}  



export const WithSuccess=()=><Toast showToast={true}>Success</Toast>

export const WithError=()=><Toast showToast={true}>Error</Toast>