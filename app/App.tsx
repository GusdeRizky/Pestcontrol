"use client";
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    sepolia
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [sepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function App({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider modalSize="compact" theme={lightTheme({
                    accentColor: "#22c55e",
                    accentColorForeground: "white",
                    borderRadius: "medium",
                })}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default App;