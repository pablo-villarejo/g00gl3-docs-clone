
import { Button } from '@/components/ui/button'
import { describe } from 'node:test'
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant="secondary">
        Click me!
      </Button>
    </div>
  )
}

export default Home