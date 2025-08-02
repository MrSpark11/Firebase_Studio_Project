import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold text-primary opacity-50">404</h1>
      <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
