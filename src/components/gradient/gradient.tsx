import { cn } from '@/utils/cn'
import demo from '/assets/findee_landing.gif'

function Gradient({ className }: { className?: string }) {
  return (
    <div className={cn('hidden w-1/2 md:block', className)} style={{ backgroundColor: '#ffbd59' }}>
      <div className="relative -top-10 hidden lg:block">
        <img
          src={demo}
          alt="Findee"
          style={{
            width: '60%',
            marginTop: 60,
            height: 'auto',
            margin: 'auto',
            backgroundColor: '#ffbd59',
          }}
        />
      </div>
    </div>
  )
}

export default Gradient
