// types/global.d.ts
export {};

declare global {
  interface Window {
    sendEmojiToAll?: (emoji: string, username: string) => void;
    sendHandRaiseToAll?: (username: string, isRaised: boolean) => void;
    sendChatToAll?: (message: string, username: string) => void;
  }
}
