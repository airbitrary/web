import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Spin AI — Privacy Policy",
  description: "Privacy Policy for Spin AI.",
  alternates: {
    canonical: "/spin-ai/privacy",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 md:p-8">
      <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-gray-300">
        {children}
      </div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 text-base font-medium text-gray-100">{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-none space-y-2 pl-0">
      {children}
    </ul>
  );
}

function Bullet({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
      <span>
        {label && <strong className="text-gray-100">{label} </strong>}
        {children}
      </span>
    </li>
  );
}

export default function SpinAIPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-5xl">🎡</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-1 text-lg text-gray-400">Spin AI</p>
        <p className="mt-3 text-sm text-gray-500">
          Effective April 20, 2026 · Last updated April 20, 2026
        </p>
      </div>

      <div className="space-y-6">
        {/* Overview */}
        <Section title="Overview">
          <p>
            Spin AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our Spin AI mobile application (the
            &ldquo;App&rdquo;) available on the Apple App Store for iPhone
            devices.
          </p>
          <p>
            Spin AI is a decision-making and party game app featuring
            customizable spinning wheels and flash cards, powered by on-device
            Apple Intelligence. Users can spin pre-made or custom collections to
            make choices, play games, and have fun.
          </p>
        </Section>

        {/* Information We Collect */}
        <Section title="Information We Collect">
          <SubSection title="Local Device Information">
            <p>
              Spin AI is designed with privacy in mind and stores all data
              locally on your device:
            </p>
            <BulletList>
              <Bullet label="App Preferences:">
                Your selected theme, audio settings, haptic feedback, and other
                app preferences are stored locally using UserDefaults
              </Bullet>
              <Bullet label="Custom Collections:">
                Any collections you create (names and text entries) are stored
                locally on your device
              </Bullet>
              <Bullet label="Trial and Purchase Status:">
                Information about your trial period and in-app purchases (stored
                securely in Keychain)
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Collection Database">
            <BulletList>
              <Bullet>
                A bundled database of 529+ pre-made collections is copied to
                your device. This data never leaves your device.
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Apple Services Integration">
            <p>
              When you use certain features, Apple may collect information
              according to their privacy policy:
            </p>
            <BulletList>
              <Bullet label="App Store Purchases:">
                Transaction data for in-app purchases is processed by Apple
              </Bullet>
              <Bullet label="StoreKit Integration:">
                Purchase validation and receipt verification through
                Apple&apos;s servers
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="On-Device AI Processing">
            <BulletList>
              <Bullet label="Apple Foundation Models:">
                The app uses Apple&apos;s on-device language models to generate
                collection entries and quiz questions from your text prompts
              </Bullet>
              <Bullet>
                <strong className="text-gray-100">
                  All AI processing occurs entirely on your device
                </strong>{" "}
                &mdash; no prompts, generated content, or user data are sent to
                external servers
              </Bullet>
              <Bullet>
                <strong className="text-gray-100">
                  No user data is transmitted
                </strong>{" "}
                to any third-party AI service
              </Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* How We Use Your Information */}
        <Section title="How We Use Your Information">
          <BulletList>
            <Bullet>
              Providing the spinning wheel and flash card experience
            </Bullet>
            <Bullet>
              Saving and loading your custom collections and preferences
            </Bullet>
            <Bullet>
              Generating AI-powered collection entries from your prompts
            </Bullet>
            <Bullet>Managing theme preferences and audio settings</Bullet>
            <Bullet>
              Processing trial periods and premium feature access
            </Bullet>
          </BulletList>
        </Section>

        {/* Data Storage and Security */}
        <Section title="Data Storage and Security">
          <SubSection title="Local Storage">
            <BulletList>
              <Bullet>
                All user-created content (custom collections, preferences) is
                stored locally on your device
              </Bullet>
              <Bullet>No user data is transmitted to external servers</Bullet>
              <Bullet>
                Data persists until you delete the app or manually clear it
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Secure Storage">
            <BulletList>
              <Bullet>
                Purchase and trial information is stored securely in your
                device&apos;s Keychain
              </Bullet>
              <Bullet>
                Audio files are temporarily cached during playback and
                automatically cleaned up
              </Bullet>
              <Bullet>
                We implement industry-standard security practices for local data
                protection
              </Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* Data Sharing and Disclosure */}
        <Section title="Data Sharing and Disclosure">
          <SubSection title="No Data Sales">
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties.
            </p>
          </SubSection>

          <SubSection title="Apple Integration">
            <BulletList>
              <Bullet>
                Purchase transactions are processed through Apple&apos;s secure
                systems
              </Bullet>
              <Bullet>
                App Store Connect may provide anonymized analytics data to help
                us understand app performance
              </Bullet>
              <Bullet>
                We do not receive personal information about users from Apple
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Legal Requirements">
            <p>
              We may disclose information only when required by law or to:
            </p>
            <BulletList>
              <Bullet>
                Comply with legal processes or government requests
              </Bullet>
              <Bullet>Protect our rights, property, or safety</Bullet>
              <Bullet>Prevent fraud or security threats</Bullet>
              <Bullet>Enforce our Terms of Service</Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* Third-Party Services */}
        <Section title="Third-Party Services">
          <SubSection title="Apple Services">
            <p>The app integrates with the following Apple services:</p>
            <BulletList>
              <Bullet label="StoreKit:">
                For in-app purchase processing
              </Bullet>
              <Bullet label="AVAudioSession:">
                For ambient music playback (no recording capabilities)
              </Bullet>
              <Bullet label="Apple Foundation Models:">
                For on-device AI content generation
              </Bullet>
              <Bullet label="iOS UserDefaults:">
                For local preference storage
              </Bullet>
              <Bullet label="UserNotifications:">
                For optional local notifications. No data is sent externally.
                You can disable notifications in the app settings or iOS
                Settings at any time.
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Sharing">
            <p>
              Spin AI includes a share option that shares a collection name and
              a static App Store link. No personal data is included in the
              shared content.
            </p>
          </SubSection>

          <SubSection title="No Third-Party Analytics">
            <p>
              Spin AI does not use third-party analytics services, advertising
              networks, or data collection tools.
            </p>
          </SubSection>
        </Section>

        {/* Your Privacy Rights */}
        <Section title="Your Privacy Rights and Controls">
          <SubSection title="Data Control">
            <BulletList>
              <Bullet label="Local Data:">
                You can delete all app data by uninstalling the app
              </Bullet>
              <Bullet label="Audio Settings:">
                You can disable ambient music in the app settings
              </Bullet>
              <Bullet label="Purchase History:">
                Managed through your Apple ID account settings
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Notifications">
            <BulletList>
              <Bullet>
                You can enable or disable local notifications in the app
                settings
              </Bullet>
              <Bullet>
                To fully revoke notification permission, go to iOS Settings
                &rarr; Spin AI &rarr; Notifications
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="No Account Required">
            <BulletList>
              <Bullet>
                Spin AI does not require account creation or personal
                information
              </Bullet>
              <Bullet>
                All features work offline without internet connectivity
              </Bullet>
              <Bullet>
                No email addresses, names, or contact information are collected
              </Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* Children's Privacy */}
        <Section title="Children's Privacy">
          <p>
            Spin AI does not collect personal information from anyone, including
            children under 13. The app operates entirely offline with local
            storage only. The app is rated 13+ on the App Store.
          </p>
        </Section>

        {/* Data Retention */}
        <Section title="Data Retention">
          <BulletList>
            <Bullet label="Local Data:">
              Retained on your device until you delete the app or clear data
            </Bullet>
            <Bullet label="Purchase Records:">
              Managed by Apple according to their retention policies
            </Bullet>
            <Bullet label="No Server Data:">
              We do not maintain user data on external servers
            </Bullet>
          </BulletList>
        </Section>

        {/* International Users */}
        <Section title="International Users">
          <p>
            Since all data is stored locally on your device and no data is
            transmitted to our servers, there are no international data transfer
            concerns. The app works the same way regardless of your location.
          </p>
        </Section>

        {/* Changes */}
        <Section title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by:
          </p>
          <BulletList>
            <Bullet>
              Posting the updated policy in the App Store description
            </Bullet>
            <Bullet>Including update notices in app updates</Bullet>
            <Bullet>
              Displaying a notification within the app for significant changes
            </Bullet>
          </BulletList>
        </Section>

        {/* App Store Compliance */}
        <Section title="Apple App Store Compliance">
          <p>
            This app complies with Apple&apos;s App Store Review Guidelines and
            privacy requirements:
          </p>
          <BulletList>
            <Bullet>
              No personal data collection requiring privacy labels
            </Bullet>
            <Bullet>Local data storage only</Bullet>
            <Bullet>
              Transparent about StoreKit integration for purchases
            </Bullet>
            <Bullet>
              Audio usage limited to playback only (no recording)
            </Bullet>
            <Bullet>
              On-device AI processing only &mdash; no external AI services
            </Bullet>
          </BulletList>
        </Section>

        {/* Contact */}
        <Section title="Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <BulletList>
            <Bullet label="Email:">
              <a
                href={`mailto:${SITE.email}`}
                className="text-purple-400 hover:underline"
              >
                {SITE.email}
              </a>
            </Bullet>
            <Bullet label="Developer:">{SITE.developer}</Bullet>
            <Bullet label="Support:">
              Available through the App Store review system
            </Bullet>
          </BulletList>
        </Section>

        {/* Technical Details */}
        <Section title="Technical Details">
          <SubSection title="Permissions Used">
            <BulletList>
              <Bullet label="Audio Playback:">
                For ambient music (AVAudioSession.Category.ambient)
              </Bullet>
              <Bullet label="Notifications:">
                Optional local notifications for collection reminders
              </Bullet>
              <Bullet label="StoreKit:">
                For in-app purchase processing
              </Bullet>
              <Bullet label="Apple Foundation Models:">
                For on-device AI content generation
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="No Permissions Required">
            <BulletList>
              <Bullet>
                No camera, microphone, location, or contacts access
              </Bullet>
              <Bullet>
                No network connectivity required for core functionality
              </Bullet>
              <Bullet>No background processing</Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500">
          This Privacy Policy reflects our commitment to user privacy through
          local-first data storage and minimal data collection. Spin AI is
          designed to work entirely on your device without compromising your
          privacy.
        </p>
      </div>
    </div>
  );
}
