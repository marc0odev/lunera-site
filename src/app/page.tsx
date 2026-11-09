import Landing from "@/components/Landing";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  );
}
