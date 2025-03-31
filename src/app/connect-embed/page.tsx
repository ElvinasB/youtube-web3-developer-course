'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { client } from "../client";
import { ConnectEmbed, ConnectButton, useActiveAccount, darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const ConnectEmbedPage: React.FC = () => {
    return (
        <div className="py-20">
            <Header 
                title="ConnectEmbed UI Component"
                subtitle="Learn what our ConnectEmbed UI component is, how to use it, and how to customize it."
            />
            <ConnectEmbeds />
            <Footer />
        </div>
    )
};

function ConnectEmbeds() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <DefaultConnectEmbed />
        <CustomWalletsConnectEmbed />
        <CustomThemeConnectEmbed />
      </div>
    );
}

// Default ConnectEmbed UI Component
function DefaultConnectEmbed() {
    // Check if wallet is connected
    const account = useActiveAccount();

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Default Connect Embed</p>
            <ConnectEmbed 
                client={client}
            />
            {account && (
                <ConnectButton 
                    client={client}
                    />
            )}
        </div>
    )
}

// Customize Wallets Displayed in ConnectEmbed
function CustomWalletsConnectEmbed() {
    // Check if wallet is connected
    const account = useActiveAccount();

    //Create an array of recommended wallets
    const recomendedWallets = [
        createWallet("io.metamask"),
    ]

    //Create an array of wallets to display
    const wallets = [
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("com.roninchain.wallet")
    ]

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Connect Embed</p>
            <ConnectEmbed 
                client={client}
                wallets={wallets}
                recommendedWallets={recomendedWallets}
                showThirdwebBranding={false}
            />
            {account && (
                <ConnectButton 
                    client={client}
                    />
            )}
        </div>
    )
}

// Customize modal theme in ConnectEmbed
function CustomThemeConnectEmbed() {
    // Check if wallet is connected
    //const account = useActiveAccount();

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Custom Theme Connect Embed</p>

            <ConnectEmbed 
                client={client}
            />
        </div>
    )
}

export default ConnectEmbedPage;