'use client';

import { Request, RequestStatus } from '@/app/(routes)/requests/types';
import { RequestCard } from '@/components/RequestCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KanbanColumnProps {
  title: string;
  requests: Request[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onRequestClick: (request: Request) => void;
  status: RequestStatus;
}

export function KanbanColumn({ 
  title, 
  requests, 
  isCollapsed, 
  onToggleCollapse,
  onRequestClick,
  status
}: KanbanColumnProps) {
  const sortedRequests = [...requests].sort((a, b) => 
    a.createdAt.getTime() - b.createdAt.getTime()
  );

  if (isCollapsed) {
    return (
      <div className="min-w-[60px] border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
        <div className="h-full flex flex-col items-center justify-start p-3 gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="mb-1 h-7 w-7 hover:bg-primary/10"
            onClick={onToggleCollapse}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="flex flex-col items-center gap-3 flex-1">
            <div 
              className="writing-mode-vertical text-sm font-semibold whitespace-nowrap text-center"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {title}
            </div>
            
            <div className="flex items-center justify-center min-w-[28px] min-h-[28px] rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-sm">
              {requests.length}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-[300px] max-w-[320px] border rounded-lg bg-card flex flex-col shadow-sm">
      <div className="p-3 border-b flex items-center justify-between sticky top-0 bg-card z-10 rounded-t-lg">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-sm">{title}</h2>
          <span className="flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-sm">
            {requests.length}
          </span>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:bg-primary/10"
          onClick={onToggleCollapse}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-2 overflow-y-auto flex-1 max-h-[calc(100vh-280px)] custom-scrollbar">
        {sortedRequests.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground py-12 px-4">
            <p className="font-medium">No hay solicitudes</p>
            <p className="text-xs mt-1">Las nuevas solicitudes aparecerán aquí</p>
          </div>
        ) : (
          sortedRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onClick={() => onRequestClick(request)}
              status={status}
            />
          ))
        )}
      </div>
    </div>
  );
}
