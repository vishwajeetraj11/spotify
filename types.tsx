/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Library: NavigatorScreenParams<RootTabParamList> | undefined;
  Playlist: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type LibraryStackParamList = {
  Library: NavigatorScreenParams<RootTabParamList> | undefined;
  Playlist: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
export type LibraryStackScreenProps<
  Screen extends keyof LibraryStackParamList
> = NativeStackScreenProps<LibraryStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  YourLibrary: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
