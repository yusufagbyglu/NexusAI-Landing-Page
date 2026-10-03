import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { emailTheme } from "./email-theme";

interface WelcomeEmailProps {
  email: string;
  themeMode?: "dark" | "light"; // Defaults to dark
}

export function WelcomeEmail({ email, themeMode = "dark" }: WelcomeEmailProps) {
  // Fetching the color palette based on the theme selection mode defined in globals.css
  const theme = emailTheme[themeMode];

  return (
    <Html lang="en">
      <Head />
      <Preview>Welcome to Nexus AI (portfolio demo)</Preview>
      <Body
        style={{
          backgroundColor: theme.bgMain,
          fontFamily: "Arial, sans-serif",
          padding: "24px",
          margin: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: 12,
            padding: 32,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          {/* Heading: --foreground color */}
          <Heading
            style={{
              color: theme.foreground,
              fontSize: 22,
              margin: "0 0 16px",
              fontWeight: 700,
            }}
          >
            Welcome to Nexus AI
          </Heading>

          {/* Body Text: --dark.textSecondary or --light.foreground */}
          <Text
            style={{
              color: themeMode === "dark" ? theme.textMuted : theme.foreground,
              fontSize: 14,
              lineHeight: "22px",
              margin: "0 0 16px",
            }}
          >
            Hi {email}, thanks for subscribing to our developer newsletter.
            You&apos;ll hear from us about model updates, API enhancements and
            AI engineering insights.
          </Text>

          {/* Highlight / Brand Note: --brand-main color */}
          <Text
            style={{
              color: theme.brandMain,
              fontSize: 13,
              lineHeight: "20px",
              margin: "0 0 24px",
            }}
          >
            Demo note: Nexus AI is a fictional product built as a portfolio
            project.
          </Text>

          {/* Divider: --border color */}
          <Hr style={{ borderColor: theme.border, margin: "24px 0" }} />

          {/* Footer: Muted text */}
          <Text
            style={{
              color: theme.textMuted,
              fontSize: 12,
              margin: 0,
            }}
          >
            Built by [Your Name] · Next.js, React Email
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;
