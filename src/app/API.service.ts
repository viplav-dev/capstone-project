/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFlight: OnCreateFlightSubscription;
  onUpdateFlight: OnUpdateFlightSubscription;
  onDeleteFlight: OnDeleteFlightSubscription;
  onCreatePassenger: OnCreatePassengerSubscription;
  onUpdatePassenger: OnUpdatePassengerSubscription;
  onDeletePassenger: OnDeletePassengerSubscription;
};

export type CreateFlightInput = {
  id?: string | null;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
};

export type ModelFlightConditionInput = {
  flightNumber?: ModelStringInput | null;
  airlineName?: ModelStringInput | null;
  airlineLogo?: ModelStringInput | null;
  origin?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  flightPrice?: ModelIntInput | null;
  departureTime?: ModelStringInput | null;
  arrivalTime?: ModelStringInput | null;
  and?: Array<ModelFlightConditionInput | null> | null;
  or?: Array<ModelFlightConditionInput | null> | null;
  not?: ModelFlightConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type flight = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: ModelpassengerConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelpassengerConnection = {
  __typename: "ModelpassengerConnection";
  items: Array<passenger | null>;
  nextToken?: string | null;
};

export type passenger = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: flight | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFlightInput = {
  id: string;
  flightNumber?: string | null;
  airlineName?: string | null;
  airlineLogo?: string | null;
  origin?: string | null;
  destination?: string | null;
  flightPrice?: number | null;
  departureTime?: string | null;
  arrivalTime?: string | null;
};

export type DeleteFlightInput = {
  id: string;
};

export type CreatePassengerInput = {
  id?: string | null;
  flightId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type ModelPassengerConditionInput = {
  flightId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelPassengerConditionInput | null> | null;
  or?: Array<ModelPassengerConditionInput | null> | null;
  not?: ModelPassengerConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePassengerInput = {
  id: string;
  flightId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
};

export type DeletePassengerInput = {
  id: string;
};

export type ModelFlightFilterInput = {
  id?: ModelIDInput | null;
  flightNumber?: ModelStringInput | null;
  airlineName?: ModelStringInput | null;
  airlineLogo?: ModelStringInput | null;
  origin?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  flightPrice?: ModelIntInput | null;
  departureTime?: ModelStringInput | null;
  arrivalTime?: ModelStringInput | null;
  and?: Array<ModelFlightFilterInput | null> | null;
  or?: Array<ModelFlightFilterInput | null> | null;
  not?: ModelFlightFilterInput | null;
};

export type ModelFlightConnection = {
  __typename: "ModelFlightConnection";
  items: Array<flight | null>;
  nextToken?: string | null;
};

export type ModelPassengerFilterInput = {
  id?: ModelIDInput | null;
  flightId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelPassengerFilterInput | null> | null;
  or?: Array<ModelPassengerFilterInput | null> | null;
  not?: ModelPassengerFilterInput | null;
};

export type ModelPassengerConnection = {
  __typename: "ModelPassengerConnection";
  items: Array<passenger | null>;
  nextToken?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelpassengerFilterInput = {
  id?: ModelIDInput | null;
  flightId?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelpassengerFilterInput | null> | null;
  or?: Array<ModelpassengerFilterInput | null> | null;
  not?: ModelpassengerFilterInput | null;
};

export type ModelSubscriptionFlightFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  flightNumber?: ModelSubscriptionStringInput | null;
  airlineName?: ModelSubscriptionStringInput | null;
  airlineLogo?: ModelSubscriptionStringInput | null;
  origin?: ModelSubscriptionStringInput | null;
  destination?: ModelSubscriptionStringInput | null;
  flightPrice?: ModelSubscriptionIntInput | null;
  departureTime?: ModelSubscriptionStringInput | null;
  arrivalTime?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFlightFilterInput | null> | null;
  or?: Array<ModelSubscriptionFlightFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionPassengerFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  flightId?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPassengerFilterInput | null> | null;
  or?: Array<ModelSubscriptionPassengerFilterInput | null> | null;
};

export type CreateFlightMutation = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFlightMutation = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFlightMutation = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePassengerMutation = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePassengerMutation = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePassengerMutation = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type GetFlightQuery = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFlightsQuery = {
  __typename: "ModelFlightConnection";
  items: Array<{
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPassengerQuery = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPassengersQuery = {
  __typename: "ModelPassengerConnection";
  items: Array<{
    __typename: "passenger";
    id: string;
    flightId: string;
    flight?: {
      __typename: "flight";
      id: string;
      flightNumber: string;
      airlineName: string;
      airlineLogo: string;
      origin: string;
      destination: string;
      flightPrice: number;
      departureTime: string;
      arrivalTime: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type PassengersByFlightIdQuery = {
  __typename: "ModelpassengerConnection";
  items: Array<{
    __typename: "passenger";
    id: string;
    flightId: string;
    flight?: {
      __typename: "flight";
      id: string;
      flightNumber: string;
      airlineName: string;
      airlineLogo: string;
      origin: string;
      destination: string;
      flightPrice: number;
      departureTime: string;
      arrivalTime: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateFlightSubscription = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFlightSubscription = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFlightSubscription = {
  __typename: "flight";
  id: string;
  flightNumber: string;
  airlineName: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  flightPrice: number;
  departureTime: string;
  arrivalTime: string;
  passengers?: {
    __typename: "ModelpassengerConnection";
    items: Array<{
      __typename: "passenger";
      id: string;
      flightId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePassengerSubscription = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePassengerSubscription = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePassengerSubscription = {
  __typename: "passenger";
  id: string;
  flightId: string;
  flight?: {
    __typename: "flight";
    id: string;
    flightNumber: string;
    airlineName: string;
    airlineLogo: string;
    origin: string;
    destination: string;
    flightPrice: number;
    departureTime: string;
    arrivalTime: string;
    passengers?: {
      __typename: "ModelpassengerConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFlight(
    input: CreateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<CreateFlightMutation> {
    const statement = `mutation CreateFlight($input: CreateFlightInput!, $condition: ModelFlightConditionInput) {
        createFlight(input: $input, condition: $condition) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFlightMutation>response.data.createFlight;
  }
  async UpdateFlight(
    input: UpdateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<UpdateFlightMutation> {
    const statement = `mutation UpdateFlight($input: UpdateFlightInput!, $condition: ModelFlightConditionInput) {
        updateFlight(input: $input, condition: $condition) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFlightMutation>response.data.updateFlight;
  }
  async DeleteFlight(
    input: DeleteFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<DeleteFlightMutation> {
    const statement = `mutation DeleteFlight($input: DeleteFlightInput!, $condition: ModelFlightConditionInput) {
        deleteFlight(input: $input, condition: $condition) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFlightMutation>response.data.deleteFlight;
  }
  async CreatePassenger(
    input: CreatePassengerInput,
    condition?: ModelPassengerConditionInput
  ): Promise<CreatePassengerMutation> {
    const statement = `mutation CreatePassenger($input: CreatePassengerInput!, $condition: ModelPassengerConditionInput) {
        createPassenger(input: $input, condition: $condition) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePassengerMutation>response.data.createPassenger;
  }
  async UpdatePassenger(
    input: UpdatePassengerInput,
    condition?: ModelPassengerConditionInput
  ): Promise<UpdatePassengerMutation> {
    const statement = `mutation UpdatePassenger($input: UpdatePassengerInput!, $condition: ModelPassengerConditionInput) {
        updatePassenger(input: $input, condition: $condition) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePassengerMutation>response.data.updatePassenger;
  }
  async DeletePassenger(
    input: DeletePassengerInput,
    condition?: ModelPassengerConditionInput
  ): Promise<DeletePassengerMutation> {
    const statement = `mutation DeletePassenger($input: DeletePassengerInput!, $condition: ModelPassengerConditionInput) {
        deletePassenger(input: $input, condition: $condition) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePassengerMutation>response.data.deletePassenger;
  }
  async GetFlight(id: string): Promise<GetFlightQuery> {
    const statement = `query GetFlight($id: ID!) {
        getFlight(id: $id) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFlightQuery>response.data.getFlight;
  }
  async ListFlights(
    filter?: ModelFlightFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFlightsQuery> {
    const statement = `query ListFlights($filter: ModelFlightFilterInput, $limit: Int, $nextToken: String) {
        listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFlightsQuery>response.data.listFlights;
  }
  async GetPassenger(id: string): Promise<GetPassengerQuery> {
    const statement = `query GetPassenger($id: ID!) {
        getPassenger(id: $id) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPassengerQuery>response.data.getPassenger;
  }
  async ListPassengers(
    filter?: ModelPassengerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPassengersQuery> {
    const statement = `query ListPassengers($filter: ModelPassengerFilterInput, $limit: Int, $nextToken: String) {
        listPassengers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            flightId
            flight {
              __typename
              id
              flightNumber
              airlineName
              airlineLogo
              origin
              destination
              flightPrice
              departureTime
              arrivalTime
              createdAt
              updatedAt
            }
            firstName
            lastName
            email
            phone
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPassengersQuery>response.data.listPassengers;
  }
  async PassengersByFlightId(
    flightId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelpassengerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PassengersByFlightIdQuery> {
    const statement = `query PassengersByFlightId($flightId: ID!, $sortDirection: ModelSortDirection, $filter: ModelpassengerFilterInput, $limit: Int, $nextToken: String) {
        passengersByFlightId(
          flightId: $flightId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            flightId
            flight {
              __typename
              id
              flightNumber
              airlineName
              airlineLogo
              origin
              destination
              flightPrice
              departureTime
              arrivalTime
              createdAt
              updatedAt
            }
            firstName
            lastName
            email
            phone
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      flightId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PassengersByFlightIdQuery>response.data.passengersByFlightId;
  }
  OnCreateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
  > {
    const statement = `subscription OnCreateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onCreateFlight(filter: $filter) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
    >;
  }

  OnUpdateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
  > {
    const statement = `subscription OnUpdateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onUpdateFlight(filter: $filter) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
    >;
  }

  OnDeleteFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
  > {
    const statement = `subscription OnDeleteFlight($filter: ModelSubscriptionFlightFilterInput) {
        onDeleteFlight(filter: $filter) {
          __typename
          id
          flightNumber
          airlineName
          airlineLogo
          origin
          destination
          flightPrice
          departureTime
          arrivalTime
          passengers {
            __typename
            items {
              __typename
              id
              flightId
              firstName
              lastName
              email
              phone
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
    >;
  }

  OnCreatePassengerListener(
    filter?: ModelSubscriptionPassengerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePassenger">>
  > {
    const statement = `subscription OnCreatePassenger($filter: ModelSubscriptionPassengerFilterInput) {
        onCreatePassenger(filter: $filter) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePassenger">>
    >;
  }

  OnUpdatePassengerListener(
    filter?: ModelSubscriptionPassengerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePassenger">>
  > {
    const statement = `subscription OnUpdatePassenger($filter: ModelSubscriptionPassengerFilterInput) {
        onUpdatePassenger(filter: $filter) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePassenger">>
    >;
  }

  OnDeletePassengerListener(
    filter?: ModelSubscriptionPassengerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePassenger">>
  > {
    const statement = `subscription OnDeletePassenger($filter: ModelSubscriptionPassengerFilterInput) {
        onDeletePassenger(filter: $filter) {
          __typename
          id
          flightId
          flight {
            __typename
            id
            flightNumber
            airlineName
            airlineLogo
            origin
            destination
            flightPrice
            departureTime
            arrivalTime
            passengers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          firstName
          lastName
          email
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePassenger">>
    >;
  }
}
