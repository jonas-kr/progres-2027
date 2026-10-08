import {
  SafeAreaView as NativeSafeAreaView,
  type Edge,
} from "react-native-safe-area-context";
import type { ComponentProps } from "react";

type SafeAreaProps = ComponentProps<typeof NativeSafeAreaView> & {
  edges?: Edge[];
};

export function SafeArea({ edges, ...props }: SafeAreaProps) {
  return <NativeSafeAreaView edges={edges} {...props} />;
}
