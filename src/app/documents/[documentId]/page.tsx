interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  
    return (
    <div>
      <h1>Document ID Page</h1>
      <p>This is the page for this document: {documentId}.</p>
    </div>
  );
}

export default DocumentIdPage;