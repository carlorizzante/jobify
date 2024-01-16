import { deleteJob } from '@/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { WithId } from '@/types';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export const DeleteJobForm = ({ id }: WithId) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const { success, message, error } = await deleteJob(id);
      if (success && message) {
        toast({
          description: message
        });
        queryClient.invalidateQueries({ queryKey: ['jobs'] });
        queryClient.invalidateQueries({ queryKey: ['stats'] });
        queryClient.invalidateQueries({ queryKey: ['charts'] });
      } else {
        toast({
          description: error
        })
      }
    }
  });

  const handleClick = () => mutate(id);

  return (
    <Button
      size="sm"
      className="text-white uppercase"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? 'Deleting' : 'Delete'}
    </Button>
  )
}
