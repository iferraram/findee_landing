import { cn } from '@/utils/cn'

function Gradient({ className }: { className?: string }) {
  return (
    <div className={cn('hidden w-1/2 md:block', className)} style={{ backgroundColor: '#ffbd59' }}>
      <div className="relative -top-10 hidden lg:block">
        <img
          src="/assets/findee_landing.gif"
          alt="Findee"
          style={{
            width: '60%',
            marginTop: 40,
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
