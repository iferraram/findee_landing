import { ArticleTitle } from '@/components/article'

export default function FaqsPage() {
  return (
    <div
      style={{ backgroundColor: 'white', margin: 'auto' }}
      className="w-full p-5 md:w-10/12 md:p-20"
    >
      <ArticleTitle>Your questions answered</ArticleTitle>

      <details
        className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
        open
      >
        <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
          What is Findee?
        </summary>
        <p>
          Findee is a personalized travel companion app designed to help you discover new places
          based on your preferences, mood, location, and interests. It provides unique
          recommendations for dining, activities, and attractions, all tailored specifically for
          you.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">How does Findee work?</summary>
        <p>
          Findee uses a smart recommendation engine that analyzes your preferences, location, and
          past interactions to suggest hidden gems and local favorites. Whether you're looking for
          healthy dining, a fun activity, or a perfect spot for a date, Findee finds the best match
          for you.
          <br />
          <br />
          Findee takes into account factors like your mood, preferences, current location, and even
          the type of experience you're seeking (e.g., relaxing, adventurous, social). The more you
          use Findee, the smarter and more personalized its suggestions become.
        </p>
      </details>
      <details className="mt-4 block rounded-sm border-primary-200 px-4 hover:border-primary-300">
        <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
          When will I receive access to Findee?
        </summary>
        <p>
          After being selected, you will receive an email with the next steps. You'll gain access to
          the app on October 4th, along with further instructions to help you start exploring
          Findee. Please allow up to 72 hours for our team to process your request and send
          confirmation emails, as we ensure everything runs smoothly for all beta testers.
        </p>
      </details>
      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">Is Findee in beta testing?</summary>
        <p>
          Yes! Findee is currently in beta testing. This means that we are still improving the app
          and adding new features, but you can start using it now and provide valuable feedback.
        </p>
        <p>
          Only the first 100 people who sign up will have access to the beta version. Once you're
          approved, we will send you an email with your access key to start exploring Findee.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          What does it mean to be in beta?
        </summary>
        <p>
          Beta testing means that the app is still in development and may contain some bugs or
          incomplete features. Your feedback during this phase will help us improve the app before
          the full launch. By joining the beta, you’ll get early access to Findee’s features and a
          chance to shape the future of the app.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          How will I know if I’m selected for the beta?
        </summary>
        <p>
          If you're one of the first 100 people to sign up, you'll receive an email from us with
          your access key to the Findee app. Keep an eye on your inbox for the confirmation!
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          What makes Findee different from other travel apps?
        </summary>
        <p>
          Unlike other apps that show the same trendy spots, Findee focuses on discovering unique,
          lesser-known places tailored to your specific tastes, location, and mood. It's not about
          what's popular—it's about what's right for you.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          Can I share places I find on Findee with my friends?
        </summary>
        <p>
          Yes! You can easily share your favorite spots and recommendations with friends directly
          from the app.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">Is Findee free to use?</summary>
        <p>
          Yes, Findee is free to download and use! You can explore all of its features, including
          personalized recommendations, creating wishlists, and curating your own collections of
          places you want to visit.
        </p>
      </details>
    </div>
  )
}
