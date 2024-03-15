/**
 * The above code defines various utility functions and error handlers for handling global errors and
 * emitting events.
 * @returns The code snippet does not have a specific return statement. It consists of several
 * functions and constants, but none of them have a return statement.
 */
// import { AxiosError,AxiosResponse } from 'axios';
// import events from '@/json/events/events';
// import eventEmitter from 'services/event.emitter';
// import { BaseApiResponse } from '@/interface/common.interface';
// /**
//  * Check if the window object exists.
//  * @returns A function that checks if the window is undefined.
//  */
// export function checkWindow() {
//   return typeof window !== "undefined";
// }

import events from "@/json/events/events";
import eventEmitter from "@/services/event.emitter";
import { BaseApiResponse } from "@/typescript/interfaces";
import { AxiosError, AxiosResponse } from "axios";

// export function isInServer() {
//   return typeof document === "undefined";
// }

// export function isApple() {
//   if (typeof navigator === "undefined") {
//     return false;
//   }
//   const platformExpression = /Mac|iPhone|iPod|iPad/i;
//   const agent = navigator.userAgent;
//   return platformExpression.test(agent);
// }

// export function isAppleSafari() {
//   if (typeof navigator === "undefined") {
//     return false;
//   }
//   const rejectedExpression = /Chrome|Android|CriOS|FxiOS|EdgiOS/i;
//   const expectedExpression = /Safari/i;

//   const agent = navigator.userAgent;
//   if (rejectedExpression.test(agent)) {
//     return false;
//   }
//   return isApple() && expectedExpression.test(agent);
// }

export const globalCatchSucess = (response: AxiosResponse<BaseApiResponse>) => {
  let message = "Something went wrong";
  if (response?.data?.message) {
    message = response?.data.message;
  }
  console.log('message', message)
  eventEmitter.emit(events.showNotification, {
    message,
    options: { variant: "success" },
  });
};

export const globalCatchWarning = (
  response: AxiosResponse<BaseApiResponse>
) => {
  let message = "Something went wrong";
  if (response?.data?.message) {
    message = response?.data.message;
  }

  eventEmitter.emit(events.showNotification, {
    message,
    options: { variant: "warning" },
  });
};

export const globalCatchError = (error: AxiosError<BaseApiResponse>) => {
  let message = "Something went wrong";
  if (error.response?.data?.message) {
    message = error.response?.data.message;
  }
  eventEmitter.emit(events.showNotification, {
    message,
    options: { variant: "error" },
  });
};
